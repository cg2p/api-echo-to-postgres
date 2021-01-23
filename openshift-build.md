# build and deploy to OpenShift

```
oc new-project api-echo-to-postgres

# from template
oc new-app -f ./api-echo-postgres-template.json \
    -p NAME=api-echo-to-postgres -p SERVER_PORT=3000

# from git
oc new-app https://github.com/cg2p/api-echo-to-postgres -e SERVER_PORT=3000

oc create secret generic api-echo-to-postgres-secret \
    --from-env-file=.env

oc set env --from=secret/api-echo-to-postgres-secret dc/api-echo-to-postgres

# if built from git
oc expose svc/api-echo-to-postgres --name=api-echo-to-postgres-route
```