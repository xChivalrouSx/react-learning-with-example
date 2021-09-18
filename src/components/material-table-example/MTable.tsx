import MaterialTable from 'material-table';

const tableData = [
    {
        id: 1,
        username: "User-1",
        name: "name-1",
        phone: "555 444 33 22"
    },
    {
        id: 2,
        username: "User-2",
        name: "name-2",
        phone: "111 222 33 44"
    },
    {
        id: 3,
        username: "User-3",
        name: "name-3",
        phone: "999 999 99 99"
    }
];

const MTable = () => {

    const columns = [
        { title: 'Id', field: 'id', hidden: true },
        { title: 'Username', field: 'username' },
        { title: 'Name', field: 'name' },
        { title: 'Phone', field: 'phone'}
    ];

    return (
        <MaterialTable 
            title="Basic Example"
            columns={columns}
            data={tableData}
            style={{
                width: "50%",
                marginTop: "100px"
            }}
            options={{
                search: true 
            }}
        />
    )
}

export default MTable
