import { cfg } from "@/configuration";
import { type IVerifyResponse, verifyCloudProof } from "@worldcoin/idkit";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const proof = req.body;
  const app_id = cfg.world.appId;
  const action = cfg.world.actionId;

  const verifyRes = (await verifyCloudProof(
    proof,
    app_id as `app_${string}`,
    action as string
  )) as IVerifyResponse;

  if (verifyRes.success) {
    // TODO: Update user status in database
    res.status(200).send(verifyRes);
  } else {
    console.log({ verifyRes });
    if (verifyRes.code === "max_verifications_reached") {
      res.status(200).send(verifyRes);
    }
    res.status(400).send(verifyRes);
  }
}
