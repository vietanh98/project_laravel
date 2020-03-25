import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';
import FormSigup from './FormSigup';
class IndexUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            activePage: 3,
           
        }
    }
    componentDidMount() {
        axios.get('http://localhost/api/users').then(res => {
            this.setState({ user: res.data })
        })
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    render() {
        return (

            <Router>
                <div class="main-content">
                    <div className="col-md-12 table-list-user">
                        <h3 className="title-5 m-b-35">Table User</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-right">
                                <Link to='https://github.com/ReactTraining/react-router/issues/1147'>
                                    <button className="au-btn au-btn-icon au-btn--green au-btn--small">
                                        <i className="zmdi zmdi-plus"></i>add item</button>
                                </Link>

                            </div>
                        </div>
                        <div className="table-responsive table-responsive-data2">
                            <table className="table table-data2">
                                <thead>
                                    <tr>
                                        <th>
                                            <label className="au-checkbox"></label>

                                        </th>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>created_at</th>
                                        <th>created_update</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    this.state.user.map(user => {
                                        return (
                                            <tr className="tr-shadow">
                                                <td>
                                                    <label className="au-checkbox">
                                                    </label>
                                                </td>
                                                <td>{user.id}</td>
                                                <td>
                                                    <span className="block-email"></span>
                                                    {user.name}
                                                </td>
                                                <td>{user.email}</td>
                                                <td>{user.created_at}</td>
                                                <td>
                                                    <div className="table-data-feature">

                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit">
                                                            <i className="zmdi zmdi-edit"></i>
                                                        </button>
                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
                                                            <i className="zmdi zmdi-delete"></i>
                                                        </button>
                                                        <button className="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="More">
                                                            <i className="zmdi zmdi-more"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <Switch>
                            
                 </Switch>

            </Router>

        );
    }
}
export default IndexUser;
