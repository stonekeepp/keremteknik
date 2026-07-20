import type { SourceReference, VerificationStatus } from "../types";

export type ErrorCodeSeed = {
  deviceSlug: string;
  deviceTitle: string;
  brandGroupSlug: string;
  brandGroupTitle: string;
  brand: string;
  code: string;
  codeSlug: string;
  codeVariants: string[];
  meaning: string;
  applicableModels: string[];
  symptoms: string[];
  possibleCauses: string[];
  safeChecks: string[];
  doNotDo: string[];
  technicianChecks: string[];
  relatedCodes: string[];
  modelVariationWarning: string;
  verificationStatus: VerificationStatus;
  sources: SourceReference[];
};
