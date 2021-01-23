# build and deploy to OpenShift

```
oc new-project api-echo-postgres

oc new-app -f ./api-echo-postgres-template.json \
    -p NAME=api-echo-postgres -p SERVER_PORT=3000


oc create secret generic api-echo-postgres-secret \
    --from-env-file=db-secret.env

oc set env --from=secret/api-echo-postgres-secret dc/api-echo-postgres

oc expose svc/api-echo-postgres --name=api-echo-postgres-route
```