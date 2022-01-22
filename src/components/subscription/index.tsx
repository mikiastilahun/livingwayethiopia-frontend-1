
import React, { useState } from 'react';
import { BackgroundImage, SubscriptionFormButton, SubscriptionFormInput, SubscriptionBox, SubscriptionContainer } from './style';
import Image from "next/image";
import MailchimpSubscribe from 'react-mailchimp-subscribe';


const Subscription = () => {

    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL as string;
    const SimpleForm = () => <MailchimpSubscribe url={MAILCHIMP_URL} />
    return (
        <SubscriptionContainer>
            <BackgroundImage>
                <Image loading="eager" width={200} height={200} src="/icons/books.svg" alt="books" />
            </BackgroundImage>
            <SubscriptionBox>
                <span className='title'>
                    Subscribe to get notified about update
                </span>
                <span className='subText'>
                    By subscribing with your mail, <br /> You will get updates about things to come.
                </span>
                <MailchimpSubscribe
                    url={MAILCHIMP_URL}
                    render={({ subscribe, status, message }) => {
                        return (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={(formData: any) => subscribe(formData)}
                            />
                        )
                    }}
                />


            </SubscriptionBox>
        </SubscriptionContainer>
    );
}

export default Subscription;



const CustomForm = ({ status, message, onValidated }: any) => {
    let email: string = "";
    const submit = () =>
        email &&
        email.includes("@") &&
        email.includes(".") &&
        onValidated({
            EMAIL: email,
        });
    return <div className='form'>
        <SubscriptionFormInput placeholder='Enter your email' type="email" onChange={(event: any) => {
            email = event.target.value;
        }} />
        <SubscriptionFormButton className='px-6' disabled={status === "sending"} onClick={submit} style={{ cursor: status === "sending" ? "progress" : "pointer" }}>
            <p>
                {status === "sending" ? "Subscribing..." : "Subscribe"}
            </p>
        </SubscriptionFormButton>

        {status === "error" && (
            <div
                className='w-full text-center text-md text-orange-600'
            >
                SomeThing Went Wrong. Please Try Again.
            </div>
        )}
        {status === "success" && (

            <div
                className='text-md px-2 w-full text-center '
                style={{ color: "green" }}
            >
                Welcome to the Living way Ethiopia Church!
            </div>
        )}
    </div>
}