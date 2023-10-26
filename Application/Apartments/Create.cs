using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apartments
{
    public class Create
    {
        public class Command:IRequest
        {
            public Apartment Apartment{get;set;}
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
               _context=context;   
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
               _context.Apartments.Add(request.Apartment);

               await _context.SaveChangesAsync();

            }
        }
    }
}