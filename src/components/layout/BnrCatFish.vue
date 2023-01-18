<template>
    <noindex>
        <div class="cat_mob_b"
            style="z-index: 65000; position: fixed; width: 100%; height: 180px;  left: 0px;bottom: 0;">
            <div style="z-index: 65000; position: fixed; width: 100%; bottom: 0;">
                <a target="_blank" href="/ru/go?n=211" style="display: flex;justify-content: center;background: red;">
                    <img src="https://ggscore.com/media/a/banner211.gif" alt="cf" style="max-width:100%"
                        class="cat_mob">
                </a>
                <a href="javascript:;" class="closer">
                    <div class="cat_times"></div>
                </a>
            </div>
        </div>
    </noindex>
</template>

<style scoped>
.cat_mob_b {
    display: none;
}
@media (max-width: 768px) {
    .cat_mob_b {
        display: block;
    }
}


.closer {
    position: absolute;
    top: -12px;
    right: 20px;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 20px;
}

.cat_times {
    width: 24px;
    height: 24px;
    border-radius: 20px;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIG9wYWNpdHk9IjAuOCIgZmlsbD0iIzQwNDA0MCIgZD0iTTAuMDU1LDB2MjRoMjRWMEgwLjA1NXogTTE2LjUyNSwxOC4xNzFMMTIsMTMuNjQ2bC00LjUyNiw0LjUyNGwtMS42NDUtMS42NDZMMTAuMzU0LDEyTDUuODI5LDcuNDc1TDcuNDc0LDUuODNMMTIsMTAuMzU0bDQuNTI1LTQuNTI1bDEuNjQ2LDEuNjQ2TDEzLjY0NSwxMmw0LjUyNiw0LjUyNUwxNi41MjUsMTguMTcxeiIvPjwvc3ZnPg==);
}
</style>