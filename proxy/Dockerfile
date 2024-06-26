FROM nginx:1.21.0-alpine

# Из коробки nginx не умеет работать с переменными окружения. Однако docker
# образ во время запуска использует утилиту envsubst, которая входит в состав
#системы linux, чтобы преобразовать шаблоны (по умолчанию это папка /etc/nginx/templates),
#подставив в них переменные окружения, и скопировать в папку /etc/nginx/conf.d, откуда
#уже nginx загружает их как обычные файлы конфигурации
COPY ./nginx.default.conf /etc/nginx/templates/default.conf.template

COPY ./downloads ./downloads

COPY ./ssl ./ssl