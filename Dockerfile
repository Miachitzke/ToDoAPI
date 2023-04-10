FROM mcr.microsoft.com/mssql/server:2022-latest
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=#ps123456
ENV MSSQL_PID=Developer
ENV MSSQL_TCP_PORT=1433
EXPOSE 1433
WORKDIR /src
COPY todolistdatabase.sql ./todolistdatabase.sql
RUN (/opt/mssql/bin/sqlservr --accept-eula & ) | grep -q "Service Broker manager has started" &&  /opt/mssql-tools/bin/sqlcmd -S127.0.0.1 -Usa -P#ps123456 -i todolistdatabase.sql