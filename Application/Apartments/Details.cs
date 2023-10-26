using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apartments
{
    public class Details
    {
        public class Query:IRequest<Apartment>
        {
            public Guid Id{get;set;}
        }

        public class Handler:IRequestHandler<Query,Apartment>
        {
           
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context=context;
            }

            public async Task<Apartment> Handle(Query request,CancellationToken cancellationToken)
            {
                return await _context.Apartments.FindAsync(request.Id);
            }   
        }
    }
}