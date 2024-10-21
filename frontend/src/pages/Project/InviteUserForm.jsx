import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import React from "react";
import { DialogClose } from "@/components/ui/dialog";
import { inviteToProject } from "@/redux/Project/Project.Action";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const InviteUserForm = ({ projectId }) => {
  const dispatch = useDispatch();

  const { id } = useParams;
  const onSubmit = (data) => {
    data.projectId = projectId;
    dispatch(inviteToProject({ email: data.email, projectId: id }));

    console.log("Invitation Sent", data);
  };

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter User Email"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            <Button type="submit" className="w-full bg-slate-400 py-5">
              Send Invitation
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default InviteUserForm;
