import { create } from "zustand";

export const useSetupStore = create((set) => ({
    setup: {
        name: "",
        email: "",
        phone: "",
        dob: "",
        industry: "",
        profession: "",
        state: "",
        pin: ""
    },

    setSetup: (state) => set({ setup: state })

}))