"use client";
import { IssueStatusBadge, Skeleton } from "@/app/components";
import { Issue, Status, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  issue: Issue;
}

const statuses: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const StatusSelect = ({ issue }: Props) => {
  const updateIssueStatus = (status: Status) => {
    axios
      .patch(`/api/issues/${issue.id}`, {
        status,
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      });
  };

  return (
    <>
      <Select.Root
        defaultValue={issue.status}
        onValueChange={updateIssueStatus}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            {statuses?.map((status) => (
              <Select.Item key={status.value} value={status.value}>
                <IssueStatusBadge status={status.value} />
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default StatusSelect;
