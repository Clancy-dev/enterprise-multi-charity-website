"use client";

import React from "react"

import { useState } from "react";
import { Heart, CreditCard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Charity } from "@/lib/data";

const presetAmounts = [25, 50, 100, 250, 500, 1000];
const currencies = [
  { value: "USD", label: "USD ($)" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
  { value: "KES", label: "KES" },
  { value: "NGN", label: "NGN" },
];
const gateways = [
  { value: "stripe", label: "Stripe", icon: CreditCard },
  { value: "paypal", label: "PayPal", icon: CreditCard },
  { value: "flutterwave", label: "Flutterwave", icon: CreditCard },
  { value: "pesapal", label: "PesaPal", icon: CreditCard },
];

export function DonationForm({ charity }: { charity: Charity }) {
  const [amount, setAmount] = useState<number | string>(50);
  const [currency, setCurrency] = useState("USD");
  const [gateway, setGateway] = useState("stripe");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handlePreset(val: number) {
    setAmount(val);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-card-foreground">
          Thank You for Your Generosity!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your donation of {currency} {Number(amount).toLocaleString()} to{" "}
          {charity.name} is being processed via{" "}
          {gateways.find((g) => g.value === gateway)?.label}. You will receive
          a confirmation receipt at {donorEmail || "your email"}.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-2"
        >
          Make Another Donation
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Heart className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">
            Make a Donation
          </h3>
          <p className="text-sm text-muted-foreground">
            Support {charity.name} directly
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div>
          <Label className="mb-2 block text-sm font-medium text-card-foreground">
            Select Amount
          </Label>
          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handlePreset(val)}
                className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                  Number(amount) === val
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-card-foreground hover:border-primary/50"
                }`}
              >
                ${val.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <Input
              type="number"
              min={1}
              placeholder="Custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-11"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-2 block text-sm font-medium text-card-foreground">
              Currency
            </Label>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-card-foreground">
              Payment Gateway
            </Label>
            <Select value={gateway} onValueChange={setGateway}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {gateways.map((g) => (
                  <SelectItem key={g.value} value={g.value}>
                    {g.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="mb-2 block text-sm font-medium text-card-foreground">
              Your Name
            </Label>
            <Input
              type="text"
              placeholder="Full name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              required
              className="h-11"
            />
          </div>
          <div>
            <Label className="mb-2 block text-sm font-medium text-card-foreground">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              required
              className="h-11"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-12 text-base font-semibold"
        >
          <Heart className="mr-2 h-4 w-4" />
          Donate {currency} {Number(amount).toLocaleString() || 0}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Your donation is secure and encrypted. You will receive a tax receipt
          via email.
        </p>
      </form>
    </div>
  );
}

export function DonationDialog({ charity }: { charity: Charity }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="h-12 w-full text-base font-semibold">
          <Heart className="mr-2 h-4 w-4" />
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">
            Donate to {charity.name}
          </DialogTitle>
        </DialogHeader>
        <DonationForm charity={charity} />
      </DialogContent>
    </Dialog>
  );
}
