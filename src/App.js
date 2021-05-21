import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Lists from "./components/Lists";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            alldata: [],
            singledata: {
                title: "",
                author: ""
            }
        };
        this.getLists = this.getLists.bind(this)
    }

    getLists() {
        this.setState({loading: true})
        const interval = setInterval(() => {
            fetch("http://localhost:3000/posts", {method: "GET"})
                .then((res) => res.json())
                .then((data) => {
                    this.setState({alldata: data, loading: false})
                    clearInterval(interval)
                })
        }, 2000)

    }

    render() {
        const {loading, alldata} = this.state
        const listTable = loading ? (
            <span>Loading Data.... Please be Patience.</span>
        ) : (<Lists alldata={alldata}/>)
        return (
            <div className="container">
            <span className="title-bar">
                <button type="button" className="btn btn-primary"
                        onClick={this.getLists}
                        disabled={loading}>Get Lists</button>
            </span>
                <div className="m-3">
                    {listTable}
                </div>
            </div>
        )
    }
}

export default App;