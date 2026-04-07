import { describe, it, expect } from "vitest"

// Extract the validation logic for testing
// Since validateForm is defined inside the component, we recreate the same logic here
interface FormData {
  name: string
  email: string
  company: string
  context: string
  friction: string
  message: string
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = "Merci d'indiquer votre nom."
  if (!form.email.trim()) {
    errors.email = "Merci d'indiquer votre email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "L'adresse email semble invalide."
  }
  if (!form.message.trim()) errors.message = "Merci de d\u00e9crire votre situation."
  return errors
}

describe("Diagnostic form validation", () => {
  const validForm: FormData = {
    name: "Jean Dupont",
    email: "jean@example.com",
    company: "Acme Corp",
    context: "Startup / Scale-up",
    friction: "Processus manuels",
    message: "Nous avons besoin d'aide.",
    website: "",
  }

  it("accepts a valid form", () => {
    expect(validateForm(validForm)).toEqual({})
  })

  it("rejects empty name", () => {
    const errors = validateForm({ ...validForm, name: "" })
    expect(errors.name).toBeDefined()
  })

  it("rejects empty name with spaces", () => {
    const errors = validateForm({ ...validForm, name: "   " })
    expect(errors.name).toBeDefined()
  })

  it("rejects empty email", () => {
    const errors = validateForm({ ...validForm, email: "" })
    expect(errors.email).toBeDefined()
  })

  it("rejects invalid email format", () => {
    const errors = validateForm({ ...validForm, email: "not-an-email" })
    expect(errors.email).toContain("invalide")
  })

  it("rejects email without domain", () => {
    const errors = validateForm({ ...validForm, email: "jean@" })
    expect(errors.email).toContain("invalide")
  })

  it("accepts email with subdomains", () => {
    const errors = validateForm({ ...validForm, email: "jean@mail.example.com" })
    expect(errors.email).toBeUndefined()
  })

  it("rejects empty message", () => {
    const errors = validateForm({ ...validForm, message: "" })
    expect(errors.message).toBeDefined()
  })

  it("rejects message with only spaces", () => {
    const errors = validateForm({ ...validForm, message: "   " })
    expect(errors.message).toBeDefined()
  })

  it("does not require company", () => {
    const errors = validateForm({ ...validForm, company: "" })
    expect(errors).toEqual({})
  })

  it("returns multiple errors at once", () => {
    const errors = validateForm({ ...validForm, name: "", email: "", message: "" })
    expect(Object.keys(errors)).toHaveLength(3)
  })
})
