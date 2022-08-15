const core = require("@actions/core");
const SibApiV3Sdk = require("sib-api-v3-sdk");
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = core.getInput("SENDINBLUE_API_KEY");
const api = new SibApiV3Sdk.TransactionalEmailsApi();

async function run() {
  const templates = await getTemplates();
  console.log("TEMPLATES", templates);
}

async function getTemplates() {
  const opts = {
    templateStatus: true,
    limit: 50,
    offset: 0,
  };

  return api.getSmtpTemplates(opts);
}

run();
