import "@netlify/functions";
import * as hubspot from "@hubspot/api-client";

export default async (): Promise<Response> => {
  const hubspotAccessKey = Netlify.env.get("HUBSPOT_ACCESS_KEY");
  const hubspotClient = new hubspot.Client({ accessToken: hubspotAccessKey });

  const forms = await hubspotClient.marketing.forms.formsApi.getPage();

  const result = forms.results.map(form => ({
    id: form.id,
    name: form.name,
  }));

  return new Response(JSON.stringify(result), { status: 200 });
};
