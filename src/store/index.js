import { createStore } from "vuex";
import { constants } from "@/store/modules/constants";
import { etf } from "@/store/modules/etf";

export default createStore({
  modules: { constants, etf },
});
