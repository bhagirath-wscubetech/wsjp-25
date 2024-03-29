import TableRow from "./TableRow";
const Table = () => {
    return (
        <table className="container table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TableRow name="Bhagirath" email="bhagirath@gmail.com" contact="123456789" />

                <TableRow name="Divya" email="divya@gmail.com" contact="123456789" />

                <TableRow name="Rahul" email="rahul@wscubetech.com" contact="123456789" />
            </tbody>
        </table>
    )
}

export default Table;