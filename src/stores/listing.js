import { writable } from 'svelte/store';
import results from '../mock/listing';

const initialState = {
    results,
    floorplans: false,
    layout: {
        cards: true,
        map: true
    }
};

const store = () => {
    const { subscribe, set, update } = writable({...initialState});

    const methods = {
        sortBy(type) {
            switch(type) {
                // order price from high to low
                case 'price:htl':
                    update(state => (state.results = [...state.results].sort((a, b) => b.price - a.price), state));
                    break;

                // order price from low to high
                case 'price:lth':
                    update(state => (state.results = [...state.results].sort((a, b) => a.price - b.price), state));
                    break;

                // order by the newest
                case 'date:new':
                    update(state => (state.results = [...state.results].sort((a, b) => a.timestamp - b.timestamp), state));
                    break;

                // order by the oldest to demonstrate 'last update'
                case 'date:old':
                    update(state => (state.results = [...state.results].sort((a, b) => b.timestamp - a.timestamp), state));
                    break;

                // reset to default order
                default:
                    update(state => (state.results = initialState.results, state));
            }
        },
        layout(type) {
            switch(type) {
                case 'cardsmap':
                    update(state => (state.layout = {
                        cards: true,
                        map: true
                    }, state));
                    break;

                case 'cards':
                    update(state => (state.layout = {
                        cards: true,
                        map: false
                    }, state));
                    break;

                case 'map':
                    update(state => (state.layout = {
                        cards: false,
                        map: true
                    }, state));
                    break;
            }
        },
        showFloorPlan(toggle) {
            update(state => (state.floorplans = toggle, state));
        }
    }

    return {
        subscribe,
        set,
        update,
        ...methods
    }
}

export default store();
