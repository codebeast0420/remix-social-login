import { ActionFunction, LoaderFunction } from '@remix-run/node';
import { authenticator } from '~/server/auth.server';

export let loader: LoaderFunction = ({ request, params }) => {
  return authenticator.authenticate(params.provider, request, {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  });
};