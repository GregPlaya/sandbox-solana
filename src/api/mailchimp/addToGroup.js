const client = require("@mailchimp/mailchimp_marketing")
const crypto = require("crypto")

const listId = "afb8658916" // Sandbox Solana's Main Audience in MC
//const leasingID = "653d122df2" // Leasing Interest Group ID
//const residentialID = "23ba42f58b" // Residential Interest Group ID

client.setConfig({
  apiKey: process.env.MAILCHIMP_NEW_API,
  server: "us14",
})

const handler = async (req, res) => {
  let lowerEmail = req.body.subscriber_email.toLowerCase()
  let hash = crypto.createHash("md5").update(lowerEmail).digest("hex")
  const response = await client.lists.setListMember(listId, hash, {
    email_address: lowerEmail,
    status_if_new: "subscribed",
    interests: { [req.body.interestID]: true },
  })
  //console.log("response", response)

  res.status(200).json({ response: response })
}

module.exports = handler
