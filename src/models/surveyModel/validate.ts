import { z } from "zod";

export const responseSchema = z.record(z.string().min(1, "La respuesta es obligatoria"));

export type ResponseType = z.infer<typeof responseSchema>;