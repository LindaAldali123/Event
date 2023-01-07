<template>
    <div class="row header">
        <!--====Start Navigation=====-->
        <div class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <ul class="nav navbar-nav navbar-left col-md-5">
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
                    <!--  <li class="nav-item silver px-3" v-if="!token">
                        <router-link to="/#">
                            <a class="nav-link ">Create an event</a>
                        </router-link>
                    </li> -->
                    <li class="nav-item px-3" v-if="token">
                        <router-link to="/addevent">
                            <a class="nav-link colo">Create an event</a>
                        </router-link>
                    </li>
                    <li class="nav-item px-3" v-if="!token">
                        <router-link class="left" to="/login" replace>
                            <a class="nav-link">Signin</a>
                        </router-link>
                    </li>
                    <!-- <li>
                        <label class="hello" style="margin-top:8px"
                            ><span id="username"> </span> Hello</label
                        >
                    </li> -->
                    <li class="but" v-if="token">
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
                                <a
                                    class="dropdown-item"
                                    id="logout"
                                    @click.prevent="logout"
                                    >Lgout <i class="fa fa-sign-out"></i>
                                </a>
                                <a class="dropdown-item" id="adm" :href="manag"
                                    >page Manager<i class="fa fa-sign-out"></i>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li v-if="token">
                        <label class="hello" style="margin-top:8px;"
                            >Hello
                            <span id="username" style="margin-left:8px">
                                {{ username }}</span
                            >
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <!--====End Navigation=====-->
    </div>
</template>
<script>
//import Dropdown from "./Dropdown";
import VueCookies from "vue-cookies";
export default {
    name: "AppHeader",
    components: {
        //  Dropdown,
    },
    data() {
        return {
            hom: "/#",
            person: "/user",
            out: "/login",
            manag: "/dashboard",
            token: VueCookies.get("session").token,
            username: VueCookies.get("session").username
            //logout: VueCookies.delete("session"),
        };
    },
    methods: {
        logout() {
            VueCookies.remove("session");
            VueCookies.set("session", { username: "", token: null });
            this.$router.push("/login");
        }
    }
};
</script>
