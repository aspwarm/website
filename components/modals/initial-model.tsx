"use client";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import { Button } from '../ui/button';

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required"
    }),
    imageURL: z.string().min(1, {
        message: "Server image is required"
    })
});

const InitialModal = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageURL: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);

    }
 
    return (
        <div>
            <Dialog open>
                <DialogContent className="bg-white text-black p-0 overflow-hidden">
                    <DialogHeader className="pt-8 px-6">
                        <DialogTitle className="text-2xl text-center font-bold">Cutomize your server</DialogTitle>
                        <DialogDescription className="text-center text-zinc-500">
                            Give your Server a Personality with a name nad Image, You can chaneg it Later
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            <div className='space-y-8 px-6' >
                                <div className='flex items-center justify-center text-center'>
                                    ToDo: Image Upload
                                </div>
                                {/* <FormField control={form.control} name="name" render={({field})=>(
                                    <FormItem>
                                        <FormLabel className='uppercase text-xs'>
                                            Server Name
                                        </FormLabel>
                                    </FormItem>
                                )}>
                                    
                                </FormField> */}
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default InitialModal;