"use strict";

const appSettingsComponent = data => {
    const currencyListHTML = data.currency.available.map(item => {
        const active = data.currency.active === item.key ? 'active' : '' ;

        return `<li data-currency="${item.key}" class="js-switcher-options ${active}">${item.name}</li>`;
    }).join('');

    const langListHTML = data.language.available.map(item => {
        const active = data.language.active === item.key ? 'active' : '' ;

        return `<li data-language="${item.key}" class="js-switcher-options ${active}">${item.name}</li>`;
    }).join('');

    const { name: defaultCurrencyName } = data.currency.available.find(item => item.key === data.currency.active);
    const { name: defaultLanguageName } = data.language.available.find(item => item.key === data.language.active);

    return (`
        <a class="setting__active" href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-cog fa-w-16 fa-2x"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" class=""></path></svg>
        </a>

        <div class="searchbar__content setting__block">
            <div class="content-inner">
                <div class="switcher-currency">
                    <strong class="label switcher-label">
                        <span>${ translate('app_settings_currency') }</span>
                    </strong>
                    <div class="switcher-options">
                        <div class="switcher-currency-trigger">
                            <span class="currency-trigger">${ defaultCurrencyName }</span>
                            <ul class="switcher-dropdown">
                                ${currencyListHTML}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="switcher-language">
                    <strong class="label switcher-label">
                        <span>${ translate('app_settings_language') }</span>
                    </strong>
                    <div class="switcher-options">
                        <div class="switcher-language-trigger">
                            <span class="currency-trigger">${ defaultLanguageName }</span>
                            <ul class="switcher-dropdown">
                                ${langListHTML}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
};
