import React from "react";

const Lists = (props) => {
    const {alldata} = props
    const listrows = []
    alldata.forEach((element) => {
        listrows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
            </tr>
        )
    })
    return (
        <table className="table table-stripped">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {listrows}
            </tbody>
        </table>
    )
}

export default Lists