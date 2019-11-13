import {createNamespacedHelpers} from 'vuex'

const {mapState} = createNamespacedHelpers(STORE_NS)

export default {
    computed: {
        ...mapState(['panels'])  // Bug is triggered with this line
    }
}