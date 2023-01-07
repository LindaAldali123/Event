<template>
    <div>
        <ul>
            <li v-for="person in people" :key="person.node.id">
                UserName: {{ person.node.username }}
                <br />
                Email: {{ person.node.email }}
            </li>
        </ul>
    </div>
</template>
<!--
<script>
import axios from "axios";
export default {
    name: "Queries_ids",
    data() {
        return {
            people: []
        };
    },
    async mounted() {
        try {
            var result = await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                url: "https://auth-islend-800.herokuapp.com/graphql",
                data: JSON.stringify({
                    query: `
                        query {
                            users (last: 100){
                              edges {
                                node {
                                  id,
                                  username,
                                  email,
                                  isActive,
                                  archived,
                                  verified,
                                  secondaryEmail
                                }
                              }
                            }
                          }
              `
                })
            });
            // .then((res) => console.log(res))
            this.people = result.data.data.users.edges;
            console.log("-----------------------------------------");
            console.log(this.people);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped></style>
-->

<script>
import { users } from "./Queries";
//import people from "./Queries";
export default {
    name: "Queries_ids",
    data() {
        return {
            people: []
        };
    },
    async mounted() {
        try {
            var result = await users();
            this.people = result;
            console.log("-----------------------------------------");
            console.log(this.people);
        } catch (error) {
            console.error(error);
        }
    }
    //props:[retrive.people],
    //   mounted() {
    //    retrive;
    //}
};
</script>
-->
