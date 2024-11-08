"use client";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

const GitHubContributionGraph = () => {
  const { resolvedTheme } = useTheme();

  return (
    <GitHubCalendar
      username="yhajiali"
      colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
      labels={{
        totalCount: "{{count}} GitHub contributions in the last year",
      }}
    />
  );
};

export default GitHubContributionGraph;
