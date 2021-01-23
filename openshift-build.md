# build and deploy to OpenShift

```
oc new-project api-echo-to-postgres
oc new-app https://github.com/cg2p/api-echo-to-postgres.git
oc create secret generic api-echo-to-postgres-secret \
    --from-file=db-secret.env
oc set env --from=secret/api-echo-to-postgres-secret dc/hello-node
oc expose svc/api-echo-to-postgres --name=api-echo-to-postgres-route
```