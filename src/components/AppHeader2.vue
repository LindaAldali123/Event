<template>
    <div class="row header2">
        <!--====Start Navigation=====-->
        <div class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand navbar-left pl-5 white" :href="hom"
                >Events</a
            >
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-control="nanbarNav"
                aria-expanded="false"
                aria-label="Toggle Navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav navbar-right col-md-7">
                    <li class="nav-item px-3 dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Help
                        </a>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <a class="dropdown-item" href="#"
                                >Find your tickets</a
                            >
                            <a class="dropdown-item" href="#"
                                >Contact an evesnt organizer</a
                            >
                            <a class="dropdown-item" href="#"
                                >Visit to help center</a
                            >
                        </div>
                    </li>
                    <li class="nav-item px-3">
                        <router-link to="/contact">
                            <a class="nav-link">Contact</a>
                        </router-link>
                    </li>
                    <li>
                        <label class="hello" style="margin-top:8px"
                            ><spane id="username"> </spane> Hello</label
                        >
                    </li>
                    <li class="but">
                        <div class="dropdown">
                            <img
                                src="../assets/user.png"
                                width="70"
                                height="56"
                                class="butim btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            />

                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a class="dropdown-item" :href="person">
                                    Personal File <i class="fa fa-user"></i
                                ></a>
                                <a class="dropdown-item" href="#">
                                    <span>6</span>notification
                                    <i class="fa fa-bell"></i
                                ></a>
                                <a class="dropdown-item" id="logout" :href="out"
                                    >Lgout <i class="fa fa-sign-out"></i>
                                </a>
                                <a class="dropdown-item" id="adm" :href="manag"
                                    >page Manager<i class="fa fa-sign-out"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- <Dropdown style="margin-left:190px" class="drop" title="Manage" :items="Manage" />-->
            </div>
        </div>
        <!--====End Navigation=====-->
    </div>
</template>
<script>
//import Dropdown from "./Dropdown";
export default {
    name: "AppHeader2",
    components: {
        //  Dropdown,
    },
    data() {
        return {
            person: "/user",
            out: "/#",
            manag: "/dashboard",
            hom: "/#"
        };
    }
};
</script>
