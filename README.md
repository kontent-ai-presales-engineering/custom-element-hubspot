[![Core integration][core-shield]](https://kontent.ai/integrations/commercetools)

![Last modified][last-commit]
[![Issues][issues-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![MIT License][license-shield]][license-url]

[![Stack Overflow][stack-shield]](https://stackoverflow.com/tags/kontent-ai)
[![Discord][discord-shield]](https://discord.gg/SKCxwPtevJ)

<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/kai-logo-hor-neg-rgb.svg">
  <img alt="Kontent.ai logo for dark/light scheme." src="docs/kai-logo-hor-pos-rgb.svg" width="300">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/hubspot-logo.svg">
  <img alt="HubSpot logo for dark/light scheme." src="docs/hubspot-logo.svg" width="300" style="padding: 0 0 20px 50px">
</picture>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#quick-deploy">Deploy</a> •
  <a href="#configuring-the-custom-element">Configuration</a> •
  <a href="#what-is-saved">Saved value</a> •
  <a href="#developing">Developing</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a> •
  <a href="#additional-resources">Resources</a>
</p>

This [custom element](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions/) extension for [Kontent.ai](https://kontent.ai) allows users to select a form from [HubSpot](https://hubspot.com/) into their structured content.

## Features

- Editors can
  - Select form created in HubSpot


## Demo

![Demo Animation][product-demo]

## Quick Deploy

Netlify has made this easy. If you click the deploy button below, it will guide you through the process of deploying it to Netlify and leave you with a copy of the repository in your account as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maartenhvdh/integration-hubspot-form)


## HubSpot setup
In order to use this custom element extension with your HubSpot account, you'll need to set up private app in [HubSpot](https://developers.hubspot.com/docs/api/private-apps /). 

### Create a private app
1.	In your HubSpot account, click the settings icon in the main navigation bar.
2.	In the left sidebar menu, navigate to Integrations > Private Apps.
3.	Click Create private app.
4.	On the Basic Info tab, configure the details of your app:
5.	Enter your app's name.
6.	Hover over the placeholder logo and click the upload icon to upload a square image that will serve as the logo for your app.
7.	Enter a description for your app.
8.	Click the Scopes tab.
9.	Select from under the Standard category 
10.	After you're done configuring your app, click Create app in the top right.

### Get the access token
1.	In your HubSpot account, click the settings icon in the main navigation bar.
2.	In the left sidebar menu, navigate to Integrations > Private Apps.
3.	Open the created private app of previous step 
4.	On the Access token card, click Show token to reveal your access token. Click Copy to copy the token to your clipboard.


## Configuring the Custom Element

You will need to add the custom element to a content type filling in the hosted code URL and the following JSON parameters:


| Name                         | Type    | Description                                                                                                                                                                                                                                                                                                                                                                    |
|------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| apiKey     | string  | This is the HubSpot Access token.                                                                                                                                                                                                                                                                                                                                         |
| portalId       | string  | To check which HubSpot account you're currently in: In the upper right, click your account name. In the dropdown menu, under your account name, you can find the account name and unique Hub ID.                                                                                                                                                                                                                                                     |

Sample parameters JSON:

```json
{
    "apiKey": "your-hubspot-access-token",
    "portalId": "your-hubspot-portal-id"
}
```

## What is Saved

The custom element will store the selected product's information in the following format:

```json
[{
  "FormGUID": "<GUID_OF_FORM>",
  "PortalID": "<Portal_ID>"
}]
```

This value will be accessible though the [Kontent.ai Delivery API](https://kontent.ai/learn/reference/delivery-api) once the content item, containing the custom element, will be saved (through preview), or published (production).

## Contributors
We have collected notes on how to contribute to this project in [CONTRIBUTING.md](CONTRIBUTING.md).

<a href="https://github.com/maartenhvdh/integration-hubspot-form/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=maartenhvdh/integration-hubspot-form" />
</a>

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Additional Resources

- [Kontent.ai Integration documentation](https://kontent.ai/learn/tutorials/develop-apps/integrate/integrations-overview)
- [Custom Element documentation](https://kontent.ai/learn/tutorials/develop-apps/integrate/content-editing-extensions)
- [Custom Element API reference](https://kontent.ai/learn/reference/custom-elements-js-api)



[last-commit]: https://img.shields.io/github/last-commit/maartenhvdh/integration-hubspot-form?style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/maartenhvdh/integration-hubspot-form.svg?style=for-the-badge
[contributors-url]: https://github.com/maartenhvdh/integration-hubspot-form/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/maartenhvdh/integration-hubspot-form.svg?style=for-the-badge
[forks-url]: https://github.com/maartenhvdh/integration-hubspot-form/network/members
[issues-shield]: https://img.shields.io/github/issues/maartenhvdh/integration-hubspot-form.svg?style=for-the-badge
[issues-url]: https://github.com/maartenhvdh/integration-hubspot-form/issues
[license-shield]: https://img.shields.io/github/license/maartenhvdh/integration-hubspot-form.svg?style=for-the-badge
[license-url]: https://github.com/maartenhvdh/integration-hubspot-form/blob/master/LICENSE
[core-shield]: https://img.shields.io/static/v1?label=&message=core%20integration&color=FF5733&style=for-the-badge
[stack-shield]: https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white&style=for-the-badge
[discord-shield]: https://img.shields.io/discord/821885171984891914?label=Discord&logo=Discord&logoColor=white&style=for-the-badge
[product-demo]: docs/hubspot-demo.png
