"use client";

import { useMemo, useState } from "react";

type QuickSlot = {
  label: string;
  daysFromToday: number;
  time: string;
};

const quickSlots: QuickSlot[] = [
  { label: "明天 10:30", daysFromToday: 1, time: "10:30" },
  { label: "明天 15:30", daysFromToday: 1, time: "15:30" },
  { label: "后天 13:00", daysFromToday: 2, time: "13:00" },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function formatDateInput(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function buildDateTime(daysFromToday: number, time: string) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return `${formatDateInput(date)}T${time}`;
}

function formatDisplay(value: string) {
  if (!value) {
    return "请选择期望到店时间";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "时间格式有误，请重新选择";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function ExpectedVisitTime() {
  const defaultValue = useMemo(() => buildDateTime(1, "10:30"), []);
  const minValue = useMemo(() => buildDateTime(0, "10:00"), []);
  const [expectedTime, setExpectedTime] = useState(defaultValue);

  return (
    <div className="rounded-lg border border-[#dce8e7] bg-[#f6fbfb] p-4">
      <label className="mb-3 block font-extrabold text-[#1f2a2e]" htmlFor="expected-visit-time">
        期望到店时间
      </label>
      <input
        id="expected-visit-time"
        className="min-h-12 w-full rounded-lg border border-[#c9dddd] bg-white px-4 text-[#12615e] outline-none transition focus:border-[#1f8f8a] focus:ring-4 focus:ring-[#1f8f8a]/15"
        min={minValue}
        type="datetime-local"
        value={expectedTime}
        onChange={(event) => setExpectedTime(event.target.value)}
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {quickSlots.map((slot) => (
          <button
            key={slot.label}
            className="rounded-full border border-[#c9dddd] bg-white px-3 py-1.5 text-sm font-bold text-[#12615e] transition hover:border-[#1f8f8a] hover:bg-[#e9f6f5]"
            type="button"
            onClick={() => setExpectedTime(buildDateTime(slot.daysFromToday, slot.time))}
          >
            {slot.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#66767b]">
        已选择：<span className="font-bold text-[#12615e]">{formatDisplay(expectedTime)}</span>
      </p>
    </div>
  );
}
