import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "6f80f4oc", // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  apiVersion: '2021-08-31',  // this is from those question during 'sanity init'
  useCdn: true,
});