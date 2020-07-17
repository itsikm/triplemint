<script>
    import Filters from '../components/filters';
    import Card from '../components/card';
    import listingStore from '../stores/listing';
</script>

<style type="text/scss">
    @import '../scss/styles.scss';

    .buy-page {
        display: grid;
        grid-template-rows: auto 42px 1fr;
        grid-template-columns: auto 418px;
        grid-column-gap: 0;
        grid-row-gap: 0;
        height: calc(100vh - 55px);
        width: 100vw;

        .filters {
            grid-area: 1 / 1 / 1 / 3;
        }

        .results,
        .map {
            grid-row: 2 / 4;
        }

        .results {
            display: grid;
            grid-auto-rows: 360px;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            grid-gap: 10px;
            padding: 10px;
            overflow-y: auto;
            overflow-x: hidden;

            &:after {
                height: 1px;
                content: " ";
            }
        }

        .map {
            border-left: 1px solid $cl-gainsboro;
            background-color: $cl-white-smoke;

            .fake-map {
                width: 100%;
                height: 100%;
                margin: auto;
                text-align: center;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-image: url('/statics/images/fake-map.jpg');
                position: relative;
            }
        }

        &.full {
            grid-template-columns: 1fr;
        }
    }
</style>

<div class="buy-page {$listingStore.layout.map && $listingStore.layout.cards ? '' : 'full'}">
    <div class="filters">
        <Filters />
    </div>
    {#if $listingStore.layout.cards}
        <div class="results">
            {#each $listingStore.results as card}
                <Card {...card} showplan={$listingStore.floorplans} />
            {/each}
        </div>
    {/if}
    {#if $listingStore.layout.map}
        <div class="map">
            <div class="fake-map"></div>
        </div>
    {/if}
</div>
