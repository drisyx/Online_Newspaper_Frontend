import React from 'react'

const AppHeader = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <a class="navbar-brand" href="/">
                        <img src="https://www.shutterstock.com/image-vector/newspaper-vector-illustrationisolated-on-white-260nw-2076848707.jpg" alt="Bootstrap" width="30" height="24" />
                    </a>


                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Add</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Delete</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">ViewAll</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default AppHeader