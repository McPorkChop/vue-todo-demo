import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    name: "TsxBased",
    setup() {
        const store = useStore();
        const state = reactive({
            item: ""
        });
        const add = function () {
            if (!state.item) return;
            store.commit("ADD", state.item);
        };
    }
});
