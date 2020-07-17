<script>
    import listingStore from '../../stores/listing';
    const sortChange = (e) => listingStore.sortBy(e.target.value);
    const floorPlanChange = (e) => listingStore.showFloorPlan(e.target.value === 'true');
</script>

<style type="text/scss">
    @import '../../scss/styles.scss';

    .filters-bar {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 30px;
        font-size: $size-14;
        background-color: $cl-white;
        border-bottom: 1px solid $cl-gainsboro;
        padding: 0 10px;

        @include viewport(0, 1) {
            grid-template-columns: auto;
        }

        ul.filters {
            display: inline-flex;
            justify-content: space-between;
            list-style-type: none;
            margin: 0;
            padding: 5px 0;

            li {
                display: flex;
                align-items: center;

                .btn-group:not(:last-child) {
                    margin-right: 15px;
                }

                button {
                    background-color: transparent;
                    border: 0;
                    font-size: $size-12;
                    cursor: pointer;

                    &[class^="icon-"] {
                        width: 28px;
                        height: 35px;
                    }

                    &[class^="btn-"] {
                        padding: 3px 7px;
                    }

                    &.btn-1 {
                        color: $cl-grey;
                    }

                    &.btn-2 {
                        color: $cl-eclipse;

                        &:hover {
                            color: $cl-scarlet;
                        }
                    }

                    &.btn-3,
                    &.btn-4 {
                        width: 40px;
                        height: 37px;
                        margin-left: -1px;
                        border: 1px solid $cl-gainsboro;
                        background-color: transparent;
                        background-size: 24px 24px;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }

                    &.btn-4 {
                        width: 60px;
                        background-size: 60px 24px;
                    }
                }

                select {
                    margin: 0 5px 0 0;

                    &:last-child {
                        margin: 0;
                    }
                }

                &.filter {
                    padding-right: 16px;
                    background-color: transparent;
                    background-size: 10px;
                    background-image: url('/statics/images/expand.svg');
                    background-repeat: no-repeat;
                    background-position: right 17px;
                    cursor: pointer;

                    &:hover {
                        color: $cl-caribbean-green;
                    }
                }

                .results {
                    margin-left: 5px;

                    span {
                        @include open-sans-semi-bold;
                    }
                }
            }
        }
    }
</style>

<div class="filters-bar">
    <ul class="filters">
        <li>
            <button class="icon-search"></button>
        </li>
        <li class="filter">Neighborhoods</li>
        <li class="filter">Price</li>
        <li class="filter">Bedrooms</li>
        <li class="filter">More Filters</li>
        <li>
            <button class="btn-1">Save</button>
            <button class="btn-2">Clear</button>
        </li>
    </ul>
    <ul class="filters">
        <li>
            <select name="sort" on:change="{sortChange}">
                <option value="false">Sort: Default</option>
                <option value="date:new">Newest</option>
                <option value="date:old">Last Updated</option>
                <option value="price:htl">$ High to Low</option>
                <option value="price:lth">$ Low to High</option>
            </select>
            <select name="photo" on:change={floorPlanChange}>
                <option value={false}>Photo: Default</option>
                <option value={true}>Floorplans</option>
            </select>
            <span class="results"><span>11,225</span> Results</span>
        </li>
        <li>
            <span class="btn-group">
                <button class="btn-3 icon-grid-on"></button><!--
             --><button class="btn-3 icon-list-off"></button>
            </span>
            <span class="btn-group">
                <button class="btn-3"
                        class:icon-cards-on={$listingStore.layout.cards + !$listingStore.layout.map}
                        class:icon-cards-off={!$listingStore.layout.cards + $listingStore.layout.map}
                        on:click={() => listingStore.layout('cards')}></button><!--
             --><button class="btn-3"
                        class:icon-map-on={!$listingStore.layout.cards + $listingStore.layout.map}
                        class:icon-map-off={$listingStore.layout.cards + !$listingStore.layout.map}
                        on:click={() => listingStore.layout('map')}></button><!--
             --><button class="btn-4"
                        class:icon-cardsmap-on={$listingStore.layout.cards + $listingStore.layout.map}
                        class:icon-cardsmap-off={!$listingStore.layout.cards + !$listingStore.layout.map}
                        on:click={() => listingStore.layout('cardsmap')}></button>
            </span>
        </li>
    </ul>
</div>
