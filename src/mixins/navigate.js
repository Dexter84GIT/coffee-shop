export const navigate = {
    methods: {
        navigate(id) {
            this.$router.push({title: this.title, params: {id: id}});
        }
    }
}