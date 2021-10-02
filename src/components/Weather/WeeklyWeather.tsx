import axios from "axios";
import Moment from "moment";
import { useEffect, useState } from "react";
import DailyWeather, { DailyWeatherInfo } from "./DailyWeather";

const WeeklyWeather = () => {
	const [cities, setCities] = useState<string[]>();
	const [selectedCity, setSelectedCity] = useState<string>();
	const [weatherInfos, setWeatherInfos] = useState<DailyWeatherInfo[]>();

	useEffect(() => {
		getCities();
	}, []);

	useEffect(() => {
		if (isCitiesLoad()) {
			cities && setSelectedCity(cities[0]);
		}
	}, [cities]); // eslint-disable-line

	useEffect(() => {
		setWeatherInfos([]);
	}, [selectedCity]);

	useEffect(() => {
		if (weatherInfos?.length === 0 && isCitiesLoad()) {
			getWeather();
		}
	}, [weatherInfos]); // eslint-disable-line

	const isCitiesLoad = (): boolean => {
		return cities !== undefined && cities.length > 0;
	};

	const getCities = async () => {
		setCities(
			await axios
				.get("https://www.universal-tutorial.com/api/getaccesstoken", {
					headers: {
						Accept: "application/json",
						"api-token":
							process.env.REACT_APP_UNIVERSAL_TUTORIAL_CITIES_API_TOKEN,
						"user-email":
							process.env.REACT_APP_UNIVERSAL_TUTORIAL_CITIES_API_EMAIL,
					},
				})
				.then(async (result) => {
					const token = result.data.auth_token;
					return axios
						.get("https://www.universal-tutorial.com/api/states/Turkey", {
							headers: {
								Accept: "application/json",
								Authorization: "Bearer " + token,
							},
						})
						.then((innerResult) => {
							return innerResult.data.map((item: any) => {
								return item.state_name;
							});
						});
				})
		);
	};

	const getWeather = async () => {
		await axios
			.get(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
					selectedCity +
					",tr&units=metric&appid=" +
					process.env.REACT_APP_OPEN_WEATHER_MAP_API_TOKEN
			)
			.then((result) => {
				const city = result.data;

				return axios
					.get(
						"https://api.openweathermap.org/data/2.5/onecall?lat=" +
							city.coord.lat +
							"&lon=" +
							city.coord.lon +
							"&exclude=hourly,minutely,alerts&units=metric&appid=" +
							process.env.REACT_APP_OPEN_WEATHER_MAP_API_TOKEN
					)
					.then((innerResult) => {
						setWeatherInfos(
							innerResult.data.daily.map(
								(item: any, index: number): DailyWeatherInfo => {
									const date = new Date(item.dt * 1000);
									return {
										isToday: index === 0,
										day: Moment(date).format("yyyy-MM-DD"),
										dayText: Moment(date).format("dddd"),
										image: item.weather[0].icon,
										max: item.temp.max,
										min: item.temp.min,
									};
								}
							)
						);
					});
			});
	};

	return (
		<div>
			<select
				className="form-select"
				aria-label="Default select example"
				style={{ width: "25%", margin: "auto", marginTop: "20px" }}
				onChange={(e) => {
					setSelectedCity(e.target.value);
				}}
			>
				{cities?.map((item, index) => {
					return selectedCity === item ? (
						<option selected key={index} value={item}>
							{item}
						</option>
					) : (
						<option key={index} value={item}>
							{item}
						</option>
					);
				})}
			</select>

			<hr />
			<div style={{ display: "flex" }}>
				{weatherInfos?.map((item, index) => {
					return <DailyWeather key={index} info={item} />;
				})}
			</div>
		</div>
	);
};

export default WeeklyWeather;
