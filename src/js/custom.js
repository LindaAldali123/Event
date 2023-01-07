import VueCookies from "vue-cookies";
export default {
    data() {
        return {
            token: VueCookies.get("session").token,
            username: VueCookies.get("session").username
            //logout: VueCookies.delete("session"),
        };
    },
    methods: {
        show() {
            return this.token;
        }
    }
};
