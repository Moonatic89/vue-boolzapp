const app = new Vue(
    {
        el: "#app",
        data: {
            activeId: 0,
            imagePath: "../img/user",
            users: [
                {
                    name: "PamDiSpagna",
                    avatar: "_1",
                    visibile: true,
                    messages: [
                        {
                            date: "03/08/202  15:30:55",
                            text: "Hai dato da mangiare a Brando?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:35:01",
                            text: "Si, a pranzo",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:38:40",
                            text: "Hai mangiato, quindi, VERO?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:40:05",
                            text: "Si, amore, si! Tranquilla!",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:40:34",
                            text: "Tu cos'hai mangiato?",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:41:12",
                            text: "Mia mamma mi ha fatto il ragù",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:46:50",
                            text: "Buono! Portane un po' a casa!",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Matt",
                    avatar: "_2",
                    visibile: true,
                    messages: [
                        {
                            date: "03/08/202  15:30:55",
                            text: "Hai dato da mangiare a Brando?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:35:01",
                            text: "Si, a pranzo",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:38:40",
                            text: "Hai mangiato, quindi, VERO?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:40:05",
                            text: "Si, amore, si! Tranquilla!",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:40:34",
                            text: "Tu cos'hai mangiato?",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:41:12",
                            text: "Mia mamma mi ha fatto il ragù",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:46:50",
                            text: "Buono! Portane un po' a casa!",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Pasto",
                    avatar: "_3",
                    visibile: true,
                    messages: [
                        {
                            date: "03/08/202  15:30:55",
                            text: "Hai dato da mangiare a Brando?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:35:01",
                            text: "Si, a pranzo",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:38:40",
                            text: "Hai mangiato, quindi, VERO?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:40:05",
                            text: "Si, amore, si! Tranquilla!",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:40:34",
                            text: "Tu cos'hai mangiato?",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:41:12",
                            text: "Mia mamma mi ha fatto il ragù",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:46:50",
                            text: "Buono! Portane un po' a casa!",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Lou Chigno",
                    avatar: "_4",
                    visibile: true,
                    messages: [
                        {
                            date: "03/08/202  15:30:55",
                            text: "Hai dato da mangiare a Brando?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:35:01",
                            text: "Si, a pranzo",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:38:40",
                            text: "Hai mangiato, quindi, VERO?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:40:05",
                            text: "Si, amore, si! Tranquilla!",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:40:34",
                            text: "Tu cos'hai mangiato?",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:41:12",
                            text: "Mia mamma mi ha fatto il ragù",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:46:50",
                            text: "Buono! Portane un po' a casa!",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Alessandra",
                    avatar: "_5",
                    visibile: true,
                    messages: [
                        {
                            date: "03/08/202  15:30:55",
                            text: "Hai dato da mangiare a Brando?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:35:01",
                            text: "Si, a pranzo",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:38:40",
                            text: "Hai mangiato, quindi, VERO?",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:40:05",
                            text: "Si, amore, si! Tranquilla!",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:40:34",
                            text: "Tu cos'hai mangiato?",
                            status: "sent"
                        },
                        {
                            date: "03/08/202  15:41:12",
                            text: "Mia mamma mi ha fatto il ragù",
                            status: "received"
                        },
                        {
                            date: "03/08/202  15:46:50",
                            text: "Buono! Portane un po' a casa!",
                            status: "sent"
                        }
                    ]
                },

            ]

        },
        methods: {},
    }
)