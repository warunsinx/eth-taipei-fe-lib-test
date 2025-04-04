"use client";

import React from "react";
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { cfg } from "@/configuration";

export default function WorldVerifyBtn() {
  const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    if (!res.ok) {
      throw new Error("Verification failed.");
    }
  };

  const onSuccess = () => {
    console.log("success");
  };

  return (
    <div>
      <IDKitWidget
        app_id={cfg.world.appId as unknown as `app_${string}`}
        action={cfg.world.actionId}
        onSuccess={onSuccess}
        handleVerify={handleVerify}
        verification_level={VerificationLevel.Device}
      >
        {({ open }) => (
          <button
            className="cursor-pointer border-white p-2 border-2"
            onClick={open}
          >
            Verify with World ID
          </button>
        )}
      </IDKitWidget>
    </div>
  );
}
