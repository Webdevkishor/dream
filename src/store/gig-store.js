import { create } from 'zustand';
import { get, ref } from 'firebase/database';
import { appRealDb } from '../utils/app-db';

export const useGigStore = create((set) => ({
  allGigs: [],
  filters: {
    expertise: null,
    categories: null,
    sub_categories: null
  },

  setFilters: (state) => set({ filters: state }),

  fetchGigs: async () => {
    try {
      const gigsRef = ref(appRealDb, 'gigData');
      const gigsSnapshot = await get(gigsRef);

      if (gigsSnapshot.exists()) {
        const gigsData = gigsSnapshot.val();
        const allGigs = [];

        Object.keys(gigsData).forEach(uid => {
          const userGigs = gigsData[uid];
          Object.keys(userGigs).forEach(gigId => {
            allGigs.push({
              uid: uid,
              ...userGigs[gigId]
            });
          });
        });

        set({ allGigs: allGigs });
      } else {
        console.log('No gigs found');
        set({ allGigs: [] });
      }
    } catch (error) {
      console.error('Error fetching gigs', error);
      set({ allGigs: [] });
    }
  }
}));
