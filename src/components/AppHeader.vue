<template>
    <div class="row header">
        <!--====Start Navigation=====-->
        <div class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand pl-5 red" :href="hom">Events</a>
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
                <ul class="nav navbar-nav col-md-5">
                    <form class="form-inline">
                        <!--  <i class="fa fa-search"></i> -->
                        <input
                            class="form-control mr-sm-2"
                            type="text"
                            name="search"
                            placeholder="Search events"
                            aria-label="Search"
                        />
                    </form>
                </ul>
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
                            Organize
                        </a>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <a class="dropdown-item" href="#"
                                >Why Eventbrite?</a
                            >
                            <a class="dropdown-item" href="#">Pricing</a>
                            <a class="dropdown-item" href="#">Resources</a>
                        </div>
                    </li>
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
                                >Contact an event organizer</a
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
                    <li class="nav-item px-3">
                        <router-link to="/addevent">
                            <a class="nav-link blue">Create an event</a>
                        </router-link>
                    </li>
                    <li class="nav-item px-3">
                        <router-link class="left" to="/login" replace>
                            <a class="nav-link">Signin</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--====End Navigation=====-->
    </div>
</template>
<script>
//import Dropdown from "./Dropdown";
export default {
    name: "AppHeader",
    components: {
        //  Dropdown,
    },
    data() {
        return {
            hom: "/#"
        };
    }
};
</script>
