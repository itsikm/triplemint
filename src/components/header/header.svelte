<style type="text/scss">
    @import '../../scss/styles.scss';

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: grid;
        grid-template-columns: 200px 165px auto 0;
        grid-template-rows: 52px 2px;
        background-color: $cl-white;
        border-bottom: 1px solid $cl-whisper;
        align-items: center;

        .logo {
            justify-self: center;
            height: 34px;
            margin-top: 7px;
            padding-left: 10px;
            cursor: pointer;

            img {
                width: 140px;
            }
        }

        ul.menu {
            display: flex;
            max-width: 500px;
            flex-wrap: nowrap;
            list-style-type: none;
            margin: 0 0 -3px;
            padding: 0;
            justify-content: space-evenly;
            font-size: $size-14;
            height: 100%;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: inherit;
                border-bottom: 3px solid transparent;
                transition: border-bottom-color .3s;

                &:hover,
                &.active {
                    border-bottom-color: $cl-caribbean-green;
                }
            }
        }
    }
</style>

<header>
    <a href="#homepage" class="logo">
        <img src="/statics/images/triplemint.svg" alt="logo">
    </a>
    <div>
        <select name="location">
            <option value="NYC">New York City, NY</option>
            <option value="NYC">Hudson County, NJ</option>
        </select>
    </div>
    <ul class="menu">
        <li class="active"><a href="#buy">Buy</a></li>
        <li><a href="#sell">Sell</a></li>
        <li><a href="#rent">Rent</a></li>
        <li><a href="#agents">Agents</a></li>
        <li><a href="#press">Press</a></li>
        <li><a href="#howitworks">How It Works</a></li>
    </ul>
    <div></div>
</header>
