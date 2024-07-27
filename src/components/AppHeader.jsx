import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <Link class="navbar-brand" to="/">
                        <img src="https://www.shutterstock.com/image-vector/newspaper-vector-illustrationisolated-on-white-260nw-2076848707.jpg" alt="Bootstrap" width="30" height="24" />
                    </Link>


                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Add</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/delete">Delete</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search">Search</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view">ViewAll</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default AppHeader