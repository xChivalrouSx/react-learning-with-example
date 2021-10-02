export interface DailyWeatherInfo {
	day: string;
	dayText: string;
	image: string;
	max: number;
	min: number;
	isToday: boolean;
}

const DailyWeather = (props: { info: DailyWeatherInfo }) => {
	const divBorder: string = "solid" + (props.info.isToday ? " 5px" : " 1px");
	const divColor: string = props.info.isToday ? "#f6ffff" : "";

	return (
		<>
			<div
				style={{
					textAlign: "center",
					padding: "20px",
					margin: "5px",
					border: divBorder,
					background: divColor,
				}}
			>
				<div>{props.info.day}</div>
				<div>{props.info.dayText}</div>
				<img
					src={
						"http://openweathermap.org/img/wn/" +
						props.info.image +
						"@2x.png"
					}
					alt="weather-icon"
				/>
				<div>
					<strong>{props.info.max.toFixed()}&#176;C</strong> /{" "}
					{props.info.min.toFixed()}
					&#176;C
				</div>
			</div>
		</>
	);
};

export default DailyWeather;
