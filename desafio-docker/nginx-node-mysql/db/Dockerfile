FROM mysql:5.7

ENV MYSQL_DATABASE nodedb
ENV MYSQL_ROOT_PASSWORD root

COPY CreateDatabase.sql /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/
EXPOSE 3306

CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]