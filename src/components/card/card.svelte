<script>
    export let picture;
    export let floorplan = null;
    export let address;
    export let neighborhood;
    export let price;
    export let summary;
    export let timestamp;
    export let openhouse = null;
    export let showplan = false;
</script>

<style type="text/scss">
    @import '../../scss/styles.scss';

    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        border: 1px solid $cl-gainsboro;

        .thumbnail {
            position: relative;
            width: 100%;
            height: 70%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .info-bar {
                display: flex;
                position: absolute;
                height: 36px;
                width: 100%;
                text-transform: uppercase;
                align-items: center;
                font-size: $size-12;
                color: $cl-white;
                background-color: $cl-grey;
                opacity: .9;
            }

            .open-house {
                bottom: 0;
                left: 0;
                background-size: 16px auto;
                background-position: left 10px top 7px;
                background-repeat: no-repeat;
                padding: 0 0 0 52px;

                span {
                    margin-right: 15px;
                }
            }

            .no-floor-plans {
                top: 0;
                left: 0;
                justify-content: center;
            }
        }

        .data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-transform: uppercase;
            padding: 10px 30px 10px 10px;

            p {
                margin: 0;
            }
        }

        .location {
            .address {
                font-size: $size-16;
                line-height: 20px;
                white-space: normal;
                color: $cl-eclipse;
            }

            .neighborhood {
                font-size: $size-12;
                line-height: 18px;
                color: $cl-grey;
            }
        }

        .list-info {
            .price {
                font-size: $size-14;
                line-height: 20px;
                color: $cl-eclipse;
            }

            .summary {
                font-size: $size-12;
                line-height: 14px;
                color: $cl-grey;
            }
        }

        .favorite {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40px;
            height: 40px;
            background-size: 16px;
            cursor: pointer;
        }
    }
</style>

<div class="card">
    <div class="thumbnail">
        {#if showplan && floorplan}
            <img src={floorplan} />
        {/if}
        {#if !showplan || !floorplan}
            <img src={picture} />
        {/if}
        {#if openhouse}
            <div class="icon-open-house info-bar open-house testme">
                <span>Open House</span>
                {openhouse}
            </div>
        {/if}
        {#if showplan && !floorplan}
            <div class="info-bar no-floor-plans">no floorplan available</div>
        {/if}
    </div>
    <div class="data">
        <div class="location">
            <p class="address">{address}</p>
            <p class="neighborhood">{neighborhood}</p>
        </div>
        <div class="list-info">
            <p class="price">${price.toLocaleString()}</p>
            <p class="summary">{summary}</p>
        </div>
    </div>
    <div class="icon-favorite favorite"></div>
</div>
